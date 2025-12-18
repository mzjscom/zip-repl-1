import {
  ref,
  onDisconnect,
  set,
  onValue,
  serverTimestamp as rtdbServerTimestamp,
} from "firebase/database";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { database, db } from "./firebase";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

let onlineStatusCleanup: (() => void) | null = null;

export const setupOnlineStatus = (userId: string) => {
  if (!userId) {
    console.warn("setupOnlineStatus: No userId provided");
    return;
  }
  
  if (!database) {
    console.warn("setupOnlineStatus: Realtime Database not initialized");
    return;
  }
  
  if (!db) {
    console.warn("setupOnlineStatus: Firestore not initialized");
    return;
  }

  if (onlineStatusCleanup) {
    onlineStatusCleanup();
  }

  const userStatusRef = ref(database, `/status/${userId}`);
  const userDocRef = doc(db, "pays", userId);

  const setOnline = async () => {
    try {
      await set(userStatusRef, {
        state: "online",
        lastChanged: rtdbServerTimestamp(),
      });

      await setDoc(userDocRef, {
        visitorId: userId,
        online: true,
        lastSeen: serverTimestamp(),
      }, { merge: true });
      
      console.log("User online status set successfully:", userId);
    } catch (error) {
      console.error("Error setting online status:", error);
    }
  };

  const setOffline = async () => {
    try {
      await setDoc(userDocRef, {
        online: false,
        lastSeen: serverTimestamp(),
      }, { merge: true });
    } catch (error) {
      console.error("Error setting offline status:", error);
    }
  };

  onDisconnect(userStatusRef)
    .set({
      state: "offline",
      lastChanged: rtdbServerTimestamp(),
    })
    .then(() => {
      setOnline();
    })
    .catch((error) => {
      console.error("Error setting onDisconnect:", error);
      setOnline();
    });

  const unsubscribe = onValue(userStatusRef, (snapshot) => {
    const status = snapshot.val();
    if (status?.state === "offline") {
      setOffline();
    }
  }, (error) => {
    console.error("Error listening to status:", error);
  });

  onlineStatusCleanup = () => {
    unsubscribe();
  };

  return onlineStatusCleanup;
};

export const setUserOffline = async (userId: string) => {
  if (!userId) return;

  try {
    if (db) {
      await setDoc(doc(db, "pays", userId), {
        online: false,
        lastSeen: serverTimestamp(),
      }, { merge: true });
    }

    if (database) {
      await set(ref(database, `/status/${userId}`), {
        state: "offline",
        lastChanged: rtdbServerTimestamp(),
      });
    }
  } catch (error) {
    console.error("Error setting user offline:", error);
  }
};

/**
 * Utility to manage lead popup state across components,
 * ensuring forms never reappear once cancelled or submitted,
 * and ensuring multiple popups do not collide or spam visitors.
 */

const STORAGE_KEYS = {
  LEAD_DISMISSED: "kreeta-lead-dismissed",
  LEAD_SUBMITTED: "kreeta-lead-submitted",
  NEEDSERVICE_DISMISSED: "kreeta-needservice-dismissed",
  NEEDSERVICE_SUBMITTED: "kreeta-needservice-submitted",
  CALLBACK_DISMISSED: "kreeta-callback-dismissed",
  CALLBACK_SUBMITTED: "kreeta-callback-submitted",
};

let activePopup: string | null = null;

export function isLeadFormSuppressed(): boolean {
  if (typeof window === "undefined") return true;
  try {
    // Check localStorage (permanent suppression across sessions)
    for (const key of Object.values(STORAGE_KEYS)) {
      if (localStorage.getItem(key)) {
        return true;
      }
    }
    // Check sessionStorage
    for (const key of Object.values(STORAGE_KEYS)) {
      if (sessionStorage.getItem(key)) {
        return true;
      }
    }
  } catch {
    // Fallback if storage access is restricted
  }
  return false;
}

export function suppressAllLeadForms(submitted: boolean = false): void {
  if (typeof window === "undefined") return;
  try {
    const keysToSet = submitted
      ? [
          STORAGE_KEYS.LEAD_SUBMITTED,
          STORAGE_KEYS.NEEDSERVICE_SUBMITTED,
          STORAGE_KEYS.CALLBACK_SUBMITTED,
        ]
      : [
          STORAGE_KEYS.LEAD_DISMISSED,
          STORAGE_KEYS.NEEDSERVICE_DISMISSED,
          STORAGE_KEYS.CALLBACK_DISMISSED,
        ];

    keysToSet.forEach((key) => {
      localStorage.setItem(key, "true");
      sessionStorage.setItem(key, "true");
    });
  } catch {
    // Fallback if storage access is restricted
  }
  activePopup = null;
}

export function claimLeadPopup(popupId: string): boolean {
  if (isLeadFormSuppressed()) return false;
  if (activePopup && activePopup !== popupId) return false;
  activePopup = popupId;
  return true;
}

export function releaseLeadPopup(popupId: string): void {
  if (activePopup === popupId) {
    activePopup = null;
  }
}

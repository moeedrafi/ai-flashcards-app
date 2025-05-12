import { useEffect, useRef, useState } from "react";

export const ProfilePopover = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLImageElement>(null);

  const handleLogout = () => {
    popoverRef.current?.hidePopover();
  };

  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as Node;
    if (
      popoverRef.current &&
      !popoverRef.current.contains(target) &&
      triggerRef.current &&
      !triggerRef.current.contains(target)
    ) {
      popoverRef.current.hidePopover();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block">
      <img
        width={40}
        height={40}
        ref={triggerRef}
        alt="profile pic"
        src="/noAvatar.png"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="true"
        aria-label="profile pic"
        aria-controls="profile-popover"
        className="w-10 h-10 border rounded-full ring-2 ring-custom-white object-contain cursor-pointer"
      />

      {isOpen && (
        <div
          ref={popoverRef}
          role="dialog"
          aria-modal="true"
          id="profile-popover"
          className="absolute top-10 -left-30 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200"
        >
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

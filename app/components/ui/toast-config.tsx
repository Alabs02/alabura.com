import clsx from "clsx";
import React from "react";
import { resolveValue, Toaster } from "react-hot-toast";

const ToastConfig = () => {
  return (
    <>
      <Toaster position="top-right" toastOptions={{ duration: 6000 }}>
        {(t) => {
          return (
            <div
              className={clsx(
                "shadow-lg text-[15px] bg-gradient-to-br from-gray-900 via-[#151105]/95 to-gray-900 text-white border border-gray-300/50 outline-none font-open-sans rounded-lg md:min-w-[400px] max-w-[400px] p-5 flex flex-col",
                {
                  "from-gray-900 via-[#16050b]/95 to-gray-900 text-pink-600 border-pink-400/20":
                    resolveValue(t.type, t) === "error",
                  "from-gray-900 via-[#111900]/95 to-gray-900 text-success-background border-success-hairline/50":
                    resolveValue(t.type, t) === "success",
                  "from-gray-900 via-[#140d05]/95 to-gray-900 text-primary-600 border-primary-400/20":
                    resolveValue(t.type, t) === "loading"
                }
              )}
            >
              <>
                <div className="flex items-start space-x-2 w-full">
                  <div className="h-auto w-auto rounded-full grid place-items-center">
                    <i
                      className={clsx(
                        "text-xl 2xl:text-[22px] font-poppins font-bold",
                        resolveValue(t.type, t) === "error" && "icon-x-circle",
                        resolveValue(t.type, t) === "success" &&
                          "icon-check-badge",
                        resolveValue(t.type, t) === "loading"
                          ? "loading loading-spinner loading-sm"
                          : "icon-info-circle"
                      )}
                    ></i>
                  </div>

                  <p className="font-medium font-poppins text-sm 2xl:text-[15px]">
                    {resolveValue(t.message, t)}
                  </p>
                </div>
              </>
            </div>
          );
        }}
      </Toaster>
    </>
  );
};

export { ToastConfig };

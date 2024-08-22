import React from "react";
import * as Components from "@/components/index";

// type Props = {};

const Newsletter = () => {
  return (
    <div className="py-2 relative">
      <div class="bg-primary h-36 flex items-center justify-center p-4">
        <div className="flex flex-col md:flex-row space-x-2 items-center">
          <span className="text-white text-lg font-bold">
            Sign Up For Our Newsletter
          </span>
          <div className="flex gap-2">
            <input
              type="text"
              class="outline-none text-white px-2 bg-transparent border-2 rounded-md border-white"
            ></input>
            <Components.Btn
              href="/"
              text=" SUBSRIBE NOW"
              color="bg-white"
              textColor="text-primary"
              minw="lg:min-w-[130px] "
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

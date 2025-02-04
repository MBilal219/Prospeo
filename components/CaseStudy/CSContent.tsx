import Image from "next/image";
import React, { Fragment } from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

type Props = {};

const CSContent = (props: Props) => {
  return (
    <Fragment>
      <div className="flex flex-col items-start justify-center gap-4 col-span-1 md:col-span-2">
        <h1 className="text-2xl font-medium font-montreal">
          Prospeo for Founders
        </h1>
        <p>
          Enable your team to connect with the right people through better
          contact data and workflows, guided by intent signals.
        </p>
        <ul className="list-decimal font-normal space-y-4 ml-6">
          <li>
            Contact & Account Search: Access over 124 million verified contacts
            to create targeted lists matching your ideal customer profiles.
          </li>
          <li>
            Intent Data: Identify prospects actively interested in your
            offerings for timely, relevant outreach.
          </li>
          <li>
            Chrome Extension: Allow your team to find accurate contact
            information directly on LinkedIn and other websites in one click.
          </li>
          <li>
            Reliable Contact Details: Equip your team with verified email
            addresses and phone numbers that actually pick up. Learn more
          </li>
        </ul>
        <Tabs defaultValue="Founders" className="z-10 font-coresans">
          <TabsList>
            <TabsTrigger value="Founders">Founders</TabsTrigger>
            <TabsTrigger value="Sales Team">Sales Team</TabsTrigger>
            <TabsTrigger value="Revops">Revops</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="col-span-1 relative rounded-2xl p-4 max-w-80 w-full md:max-w-52 min-h-[500px] md:min-h-[auto] md:h-[300px] lg:h-auto bg-red-100 mr-auto ml-auto md:mr-0 md:ml-auto flex flex-col justify-end items-center">
        <div className="size-full relative rounded-xl overflow-hidden ">
          <Image
            src="/assets/images/girl.png"
            alt="girl"
            fill
            className="object-cover"
          />
        </div>
        <h1 className="mt-4 text-[#222222]">For founders</h1>
      </div>
    </Fragment>
  );
};

export default CSContent;

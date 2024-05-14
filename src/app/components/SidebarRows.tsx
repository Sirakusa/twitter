import React from "react";

interface Props {
  Icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
      title?: string;
      titleId?: string;
    } & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
}

export default function SideBarRow({ Icon, title }: Props) {
  return (
    <div className="group flex max-w-fit cursor-pointer items-center space-x-2 rounded-full px-4 py-3 transition-all duration-200 hover:bg-gray-100">
      <Icon className="h-6 w-6" />
      <p className="hidden md:inline-flex group-hover:text-twitter font-light lg:text-xl">
        {title}
      </p>
    </div>
  );
}

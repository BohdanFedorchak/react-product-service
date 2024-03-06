import { IAdditionalClassesList } from "@/interfaces/commonProps.ts";

interface IAvatarProps {
  avatarUrl?: string;
  className?: IAllowedClass;
}

type IAllowedClass = "ml-2.5";

const classesList: IAdditionalClassesList = {
  "ml-2.5": "ml-2.5",
};

import DefaultAvatar from "@/assets/images/default-avatar.svg";
export default function Avatar({ avatarUrl, className }: IAvatarProps) {
  return (
    <div
      className={`w-8 h-8 rounded-full overflow-hidden ${className && classesList[className]}`}
    >
      <img
        className="w-full h-full object-cover"
        src={avatarUrl || DefaultAvatar}
        alt=""
      />
    </div>
  );
}

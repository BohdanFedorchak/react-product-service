import { useUser } from "@/hooks/useUser.tsx";
import { ChangeEvent, useState } from "react";
import { cn } from "@/utils/cn";

import Logo from "@/assets/images/Logo.svg";

import Avatar from "@/components/Avatar";
import SearchInput from "@/components/SearchInput";
import Dropdown from "@/components/Dropdown";
import Button from "@/components/Button";

import { useLocalStorage } from "usehooks-ts";
import DropdownList from "../Dropdown/DropdownList";
import { NavLink } from "react-router-dom";

interface IHeaderProps {
  className?: string;
}

export default function Header({ className }: IHeaderProps) {
  const [isShowDropdownUnderUserAvatar, setIsShowDropdownUnderUserAvatar] =
    useState(false);

  const { data: user } = useUser();

  const [, setTokenValue] = useLocalStorage("token", "");

  const searchInputChangedHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("ss ", e.target.value);
  };

  const userDropdownList = [
    {
      title: "Test",
      to: "/",
    },
    {
      title: "Test 2",
      to: "/",
    },
  ];

  const userNavigationJsxList = userDropdownList.map((listItem) => (
    <NavLink className="text-base text-black" to={listItem.to}>
      {listItem.title}
    </NavLink>
  ));

  const userBaseInfoJsx = [
    <div className="px-4 py-3 text-sm text-gray-900">
      <div>
        {user?.firstName} {user?.lastName}
      </div>
      <div className="font-medium truncate">{user?.email}</div>
    </div>,
  ];

  const signOutBtn = [
    <Button
      className="shadow-none	rounded-none text-neutral-900 text-sm text-right font-normal"
      onClick={() => setTokenValue("")}
    >
      Sign out
    </Button>,
  ];

  return (
    <header
      className={cn(
        "bg-white flex justify-between p-4 sm:px-5 sm:py-4 border-b-transparent sm:border-b sm:border-b-gray-200",
        className
      )}
    >
      <div>
        <i className="icon-menu-alt-1-1 text-28px sm:hidden"></i>
        <div className="hidden sm:flex items-center">
          <div className="w-8 h-8 mr-8">
            <img src={Logo} alt="" />
          </div>
          <SearchInput
            iconClassName="icon-search-1"
            placeholder="Search"
            onInputChanged={searchInputChangedHandler}
          />
        </div>
      </div>
      <div className="flex items-center">
        <i className="icon-bell-1 text-2xl"></i>
        <Avatar
          onClick={() =>
            setIsShowDropdownUnderUserAvatar(!isShowDropdownUnderUserAvatar)
          }
          className="ml-2.5"
          avatarUrl={user?.image}
        />
      </div>

      <Dropdown
        className={`border ${!isShowDropdownUnderUserAvatar && "hidden"}`}
        onClickOutside={() => setIsShowDropdownUnderUserAvatar(false)}
      >
        <DropdownList list={userBaseInfoJsx} />
        <DropdownList
          list={userNavigationJsxList}
          listItemClassName="px-4 py-1 cursor-pointer hover:bg-gray-100"
        />
        <DropdownList list={signOutBtn} />
      </Dropdown>
    </header>
  );
}

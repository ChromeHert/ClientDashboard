import React from 'react';
import { UserItem } from '../UserItem';
import {
  CommandItem,
  Command,
  CommandGroup,
  CommandList,
} from './command';
import { User, 
  Inbox, 
  ReceiptCent, 
  BellDot, 
  Cookie, 
  Logs, 
  Settings, 
  LogOut
} from 'lucide-react';

export const Sidebar = () => {
  const menuList = [
    {
      group: "General",
      items: [
        {
          link: "/",
          icon: <User />,
          text: "Profile",
        },
        {
          link: "/",
          icon: <Inbox />,
          text: "Inbox",
        },
        {
          link: "/",
          icon: <ReceiptCent />,
          text: "Billing",
        },
        {
          link: "/",
          icon: <BellDot />,
          text: "Notifications"
        }
      ]
    },
    {
      group: "Settings",
      items: [
        {
          link: "/",
          icon: <Settings />,
          text: "General settings",
        },
        {
          link: "/",
          icon: <Cookie />,
          text: "Privacy",
        },
        {
          link: "/",
          icon: <Logs />,
          text: "Logs",
        },
        // {
        //   link: "/",
        //   icon: <LogOut />,
        //   text: "Logout"
        // }
      ]
    }
  ];


  return (
    <div className='flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4'>
      <div>
        <UserItem />
      </div>
      <div className='grow bg-slate-200 rounded-md'>
        <Command>
          <CommandList>
            {menuList.map((menu: any, key: number) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option: any, optionKey: number) => 
                  <CommandItem className="flex gap-2" key={optionKey}>
                    {option.icon}{option.text}
                  </CommandItem>
                )}
                
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
    </div>
  );
};
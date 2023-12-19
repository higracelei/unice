'use client'

import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarLabel,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  
  import SignOut from "@/components/auth/signOut"

  export function Menu() {
    return (
      <Menubar className="rounded-none border-b border-none px-2 lg:px-4 flex justify-end">
        <MenubarMenu>
          <MenubarTrigger className="hidden md:block">Account</MenubarTrigger>
          <MenubarContent forceMount>
            <MenubarLabel inset> Account</MenubarLabel>
            <MenubarRadioGroup value="grace">
              <MenubarRadioItem value="grace">Grace</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarItem inset>账号设置</MenubarItem>
            <MenubarItem inset>
              <SignOut/>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
  }
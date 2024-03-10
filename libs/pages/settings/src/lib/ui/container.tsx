import { type PropsWithChildren } from 'react'
import {NavigationLeft, type NavigationLeftLinkProps} from "@hypolia/ui";

export function Container({ children }: PropsWithChildren) {

  const links: NavigationLeftLinkProps[] = [
    {
      title: 'General',
      icon: 'ph:gear-six-fill',
      url: '/settings/general'
    },
  ]
  return (
    <div className="bg-white flex rounded-t h-full">
      <div className="w-72 border-r border-neutral-200 relative shrink-0 min-h-[calc(100vh-10px)] pb-10">
        <div className="sticky top-7">
          <NavigationLeft title="Informations" links={links} className="py-6" />
        </div>
      </div>
      <div className="flex flex-grow min-h-[calc(100vh-10px)]">{ children }</div>
    </div>
  )

}

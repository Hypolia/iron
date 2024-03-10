import {type PropsWithChildren} from 'react'
import {useLocation} from "react-router";
import {Header, Icon, Tabs} from "@hypolia/ui";
import {IconEnum} from "@hypolia/enums";

export function Container({ children }: PropsWithChildren) {
  const { pathname } = useLocation()

  const tabsItems = [
    {
      icon: <Icon name="" />,
      name: "Test",
      active: true,
      link: '/servers/general'
    }
  ]
  return (
    <>
      <div className="flex-1 flex-col h-full overflow-hidden p-2">
        <Header
          title={"Serveurs"}
          icon={IconEnum.APPLICATION}
          iconClassName="w-16"
        />
        <Tabs items={tabsItems} />
        <div className="rounded-md mt-4 h-full bg-white">
          { children }
        </div>
      </div>
    </>
  )
}

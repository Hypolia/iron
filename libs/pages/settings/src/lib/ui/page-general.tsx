import {Avatar, BlockContent} from "@hypolia/ui";

export interface PageGeneralProps {

}
export function PageGeneral({}: PageGeneralProps) {
  return (
    <div className=" p-4 ">
      <div className="w-[300px] bg-blue-500 relative">
        <h1 className="text-lg font-semibold text-slate-900">Personnal Data</h1>

        <BlockContent title="User profile" className="mt-4">
          <div className="flex items-center">
            <div>
              <Avatar
                size={55}
                rounded="rounded-md"
                username={"Test"}
              />
            </div>

            <div className="ml-5">
              <p>

              </p>
            </div>
          </div>
        </BlockContent>
      </div>

    </div>
  )
}

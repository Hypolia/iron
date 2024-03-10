import {FormProvider, useForm} from "react-hook-form";
import {PageGeneral} from "../ui/page-general";
import {useSelector} from "react-redux";
import {getUserState} from "@hypolia/domains/users";

export function PageGeneralFeature() {
  const user = useSelector(getUserState).user

  const methods = useForm({
    mode: 'onChange',
    defaultValues: {}
  })

  return (
    <FormProvider {...methods}>
      <PageGeneral

      />
    </FormProvider>
  )
}

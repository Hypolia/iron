import {PropsWithChildren, ReactNode} from 'react'
import { Button, ButtonStyle } from '../../buttons'
import { InputText } from '../../inputs'
import { Icon } from '../../icons/icon'
import { Tooltip } from '../../tooltip/tooltip'
import { useModal } from '../../modal'
import {Controller, useForm} from 'react-hook-form'
import { Callout } from '../../callout/callout'
import {IconAwesomeEnum} from "@hypolia/enums";

export interface ModalConfirmationProps extends PropsWithChildren {
  title: string
  description?: string | ReactNode
  name?: string
  callback: () => void
  warning?: string
  placeholder?: string
  ctaButton?: string
  isDelete?: boolean
}

export function ModalConfirmation({
  title,
  description,
  name,
  callback,
  warning,
  isDelete = false,
  placeholder = isDelete ? 'Enter "delete"' : 'Enter the current name',
  ctaButton = 'Confirm',
  children,
}: ModalConfirmationProps) {
  const { handleSubmit, control } = useForm()
  const { closeModal } = useModal()

  const onSubmit = handleSubmit((data) => {
    if (data) {
      closeModal()
      callback()
    }
  })

  const copyToClipboard = () => {
    name && navigator.clipboard.writeText(name)
  }

  return (
    <div className="p-6">
      <h2 className="h4 text-neutral-400 mb-2 max-w-sm">{title}</h2>
      {warning && (
        <Callout.Root className="mb-2" color="yellow">
          <Callout.Icon>
            <Icon name={IconAwesomeEnum.TRIANGLE_EXCLAMATION} />
          </Callout.Icon>
          <Callout.Text>{warning}</Callout.Text>
        </Callout.Root>
      )}
      <div className="text-neutral-350 text-sm mb-6">
        {isDelete ? (
          description ? (
            description
          ) : (
            <>
              To confirm the deletion of <strong>{name}</strong>, please type "delete"
            </>
          )
        ) : (
          <>
            {description}
            <Tooltip content="Copy">
              <span
                data-testid="copy-cta"
                onClick={copyToClipboard}
                className="link inline cursor-pointer text-sky-500 text-sm ml-1 truncate max-w-[250px]"
              >
                {name} <Icon name="icon-solid-copy" />
              </span>
            </Tooltip>
          </>
        )}
      </div>
      <form onSubmit={onSubmit}>
        <Controller
          name="name"
          control={control}
          rules={{
            required: isDelete ? 'Please enter "delete".' : 'Please enter a name.',
            validate: (value) =>
              (isDelete ? value === 'delete' : value === name) ||
              (isDelete ? 'Please confirm by entering "delete".' : 'Please enter the right name.'),
          }}
          defaultValue=""
          render={({ field, fieldState: { error } }) => (
            <InputText
              className="mb-5"
              label={placeholder}
              //placeholder={placeholder}
              name={field.name}
              onChange={field.onChange}
              value={field.value}
              error={error?.message}
            />
          )}
        />
        {children}
        <div className="flex gap-3 justify-end">
          <Button className="btn--no-min-w" style={ButtonStyle.STROKED} onClick={() => closeModal()}>
            Cancel
          </Button>
          <Button
            className="btn--no-min-w"
            style={isDelete ? ButtonStyle.ERROR : ButtonStyle.BASIC}
            type="submit"
          >
            {ctaButton}
          </Button>
        </div>
      </form>
    </div>
  )
}

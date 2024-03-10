import {Dispatch, SetStateAction, useState} from "react";
import {classNames} from "@hypolia/utils";
import {IconAwesomeEnum} from "@hypolia/enums";
import { Icon } from "../icons/icon";

export interface TableHeadSortProps<T> {
  title: string
  data: T[]
  currentKey: string
  setData: Dispatch<SetStateAction<T[]>> | undefined
  setIsSorted: Dispatch<SetStateAction<boolean>>
}


export function sortTable<T>(data: T[], key: string) {
  return [...data].sort((a, b) => +new Date(b[key as keyof T] as string) - +new Date(a[key as keyof T] as string))
}

export function TableHeadSort<T>({ title, data, currentKey, setData, setIsSorted }: TableHeadSortProps<T>) {
  const [isSort, setIsSort] = useState(false)

  const toggleSort = () => {
    if (currentKey && setData) {
      setIsSort(!isSort)
      setIsSorted(true)
      const dataSort = sortTable(data, currentKey)
      if (isSort) {
        setData(dataSort)
      } else {
        setData(dataSort.reverse())
      }
    }
  }

  return (
    <div
      data-testid="table-head-sort"
      className={classNames(
        'text-xs font-medium select-none cursor-pointer transition-color transition-timing duration-100 hover:text-neutral-400',
        isSort ? 'text-neutral-400' : 'text-neutral-400'
      )}
      onClick={() => toggleSort()}
    >
      { title }
      <Icon
        name={IconAwesomeEnum.ANGLE_DOWN}
        className={classNames(
          'ml-1 text-2xs inline-block transition-transform ease-out duration-100',
          isSort ? 'rotate-180' : ''
        )}
      />
    </div>
  )
}

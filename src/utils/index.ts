import dayjs from "dayjs"

export function uuid(): string {

    const id = dayjs().format('YYYYMMDDHHmmssSSS').toString()

    return id

}

export function getColumns(formItems: any[] = []): any[] {

    const newItems = [...formItems]

    for (const item of newItems) {

        if (!item?.valueType || item?.valueType !== 'group' || !item?.columns || !item?.columns.length) {

            continue

        }

        newItems.push(...item?.columns,)

    }

    return newItems.filter(item => { return item.valueType !== 'group' })

}

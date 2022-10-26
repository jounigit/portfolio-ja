import React, { ReactElement } from 'react'

interface Props<D> {
    data: D[];
  }

  interface IdObject {
    id: string | number;
    image: string;
  }

export const DataDivNoClick = <D extends IdObject>({
  data,
}: Props<D>): ReactElement | null => {
  if (data.length === 0) {
    return null
  }
  return (
    <>
      { data.map((item) => (
        <div
          key={item.id}
        >
          <img src={item.image} alt="" />
        </div>
      ))}
    </>
  )
}

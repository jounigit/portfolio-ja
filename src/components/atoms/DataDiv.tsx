import React, { ReactElement } from 'react'

interface Props<D> {
    data: D[];
    onDivClick: (item: D) => void;
  }

  interface IdObject {
    id: string | number;
    image: string;
  }

export const DataDiv = <D extends IdObject>({
  data, onDivClick,
}: Props<D>): ReactElement | null => {
  if (data.length === 0) {
    return null
  }
  return (
    <>
      { data.map((item) => (
        <div
          key={item.id}
          role="presentation"
          onClick={() => onDivClick(item)}
        >
          <img src={item.image} alt="" />
        </div>
      ))}
    </>
  )
}

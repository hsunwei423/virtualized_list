import React, { CSSProperties, ReactElement} from 'react';

type RenderCallbackParams = {
  index: number,
  style: CSSProperties
};

interface IProps {
  itemHeight: number,
  windowHeight: number,
  itemCount: number,
  renderItem: (params: RenderCallbackParams) => ReactElement
};

const VirtualizedList = ({ itemHeight, windowHeight, itemCount ,renderItem }: IProps): ReactElement => {
  return (
    <div>
      123
    </div>
  )
};

export default VirtualizedList;
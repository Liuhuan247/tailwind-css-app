import React from 'react';
import classNames from 'clsx';

export interface IByCardProps {
  children?: React.ReactNode;

  /**
   * @description 组件class
   */
  className?: string;

  /**
   * @description head
   */
  head?: React.ReactNode;

  /**
   * @default false
   * @description 是否可以拖拽
   */
  draggable?: boolean;
}

const ByCard = React.forwardRef(
  (
    { className, head, draggable, children }: IByCardProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div
        ref={ref}
        className={classNames(['flex flex-col h-full bg-white'], { className })}
      >
        {head && <div className={'text-gray-700 h-10'}>{head}</div>}
        <div className={classNames(['flex-1 overflow-hidden', { draggable }])}>
          {children}
        </div>
      </div>
    );
  }
);

export default ByCard;

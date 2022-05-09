import { css } from '@emotion/react';
import React, { forwardRef, PropsWithChildren } from 'react';
import { SVGComponentProps } from '../interface';
import merge from './merge';

const iconStyles = (props: SVGComponentProps) => {
  const { filled } = props;
  return css`
    display: inline-flex;
    align-items: center;
  `;
};

const defaultProps = {
  size: 18,
};

const withWrapper = <T, P = SVGComponentProps>(Component: React.ComponentType<P & { ref?: React.Ref<T> }>) => {
  const WrapperedComponent = forwardRef<T, PropsWithChildren<P>>((p, ref) => {
    const props = merge(defaultProps, p);
    return (
      <span css={iconStyles(props)} className="ultra-icon">
        <Component {...props} ref={ref} />
      </span>
    );
  });

  WrapperedComponent.displayName = Component.displayName;

  return WrapperedComponent;
};

export default withWrapper;

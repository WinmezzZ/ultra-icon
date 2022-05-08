/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}
const LinkInterruptIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M27 14h15a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M11 14H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h15M14 6l20 34m-2-17h4m-24 0h4"
      />
    </svg>
  );
};

LinkInterruptIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const LinkInterruptIcon = withWrapper(LinkInterruptIconComponent);
export default LinkInterruptIcon;

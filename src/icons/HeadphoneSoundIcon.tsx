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
const HeadphoneSoundIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="null" d="M4 28a2 2 0 0 1 2-2h4v12H6a2 2 0 0 1-2-2v-8Z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M10 36V24m0 2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4V26Z"
      />
      <path fill="null" d="M38 26h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4V26Z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M38 24v12m0-10h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4V26ZM10 36V24c0-7.732 6.268-14 14-14s14 6.268 14 14v12M10 26v12m28-12v12"
      />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M16 32h4l2-6 4 12 2-6h4" />
    </svg>
  );
};

HeadphoneSoundIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const HeadphoneSoundIcon = withWrapper(HeadphoneSoundIconComponent);
export default HeadphoneSoundIcon;

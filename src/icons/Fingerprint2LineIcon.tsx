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
const Fingerprint2LineIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 1a9 9 0 0 1 9 9v4a9 9 0 0 1-12.092 8.455c.128-.177.251-.357.369-.542l.17-.28a10.918 10.918 0 0 0 1.55-5.345L11 16V9h2v7a12.96 12.96 0 0 1-.997 5.001 7.026 7.026 0 0 0 2.27-.378 14.93 14.93 0 0 0 .724-4.31L15 16v-3.001h2V16a17.06 17.06 0 0 1-.298 3.185 6.978 6.978 0 0 0 2.294-4.944L19 14v-4A7 7 0 0 0 7.808 4.394L6.383 2.968A8.962 8.962 0 0 1 12 1zm-5 9a5 5 0 1 1 10 0v1h-2v-1a3 3 0 0 0-5.995-.176L9 10v6c0 1.567-.4 3.04-1.104 4.323l-.024.04c-.23.414-.491.808-.782 1.179a9.03 9.03 0 0 1-1.237-.97l-.309-.3A8.97 8.97 0 0 1 3 14v-4c0-2.125.736-4.078 1.968-5.617l1.426 1.425a6.966 6.966 0 0 0-1.39 3.951L5 10v4c0 1.675.588 3.212 1.57 4.417a6.91 6.91 0 0 0 .426-2.176L7 16v-6z" />
    </svg>
  );
};

Fingerprint2LineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const Fingerprint2LineIcon = withWrapper(Fingerprint2LineIconComponent);
export default Fingerprint2LineIcon;

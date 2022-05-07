/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import iconStyle from '../styles';
import merge from '../utils/merge';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}
const defaultProps = {
  size: 24,
};

const OrangeStationIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          fill="#000"
          fillRule="evenodd"
          d="M17.06 9.615c6.049 1.269 7.214 3.424 7.215 3.427C22.04.115 15.19 3.28 13.732 4.029a.615.615 0 0 0-.332.47c-.128 1.014-.276 4.291 3.66 5.116Zm-2.407 13.077c-.574 1.595-.746 3.383-.437 5.227.776 4.625 4.6 7.976 9.07 8.341l1.53.545c.6.194 1.387.386 2.31.52 1.366.199 2.768.229 4.155.032 3.366-.478 6.203-2.21 8.178-5.502l.444-.776c-1.211 6.676-5.966 12.817-13.565 14.24-5.29.99-10.29-.375-14.027-3.348l.044.086c-2.47-4.792-2.91-9.113-1.78-12.965.54-1.845 1.478-3.493 2.706-4.956.431-.514.882-.985 1.346-1.419l.026-.025Zm2.736-8.356c2.51-.396 6.605-.374 8.903 2.193.033.036 0 .094-.048.084-1.227-.25-2.891-.255-4.17-.04-2.693.451-4.864 1.887-6.262 3.882l-.492.372a17.416 17.416 0 0 0-2.805 2.666c-1.312 1.563-2.317 3.331-2.9 5.317-1.016 3.463-.84 7.27.795 11.393a17.03 17.03 0 0 1-3.365-5.458c-1.837-4.809-1.277-11.068 1.878-15.108 2.25-2.881 5.564-4.843 8.466-5.301ZM31.68 7.039C36.283.877 41.802 5.381 42.528 6.02c.053.047.086.11.094.18.098.955.356 7.845-12.901 7.612 3.609.885 7.434 3.892 9.036 7.194.536 1.107.95 2.259 1.169 3.469.213 1.176.305 2.378.281 3.584-.053.278-.235.735-.517 1.305l-.115.227-.24.453-.552.986c-1.821 3.225-4.46 4.886-7.643 5.338a13.622 13.622 0 0 1-3.87-.031c-.448-.066-.86-.145-1.23-.231a10.006 10.006 0 0 0 6.527-4.447c.33-.44.61-.925.83-1.466 1.006-2.476 1.14-4.942.36-7.709-1.249-4.428-4.592-7.668-8.81-9.121-.037-.013-.038-.064 0-.075.554-.16 2.893-1.106 6.733-6.248Z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
};

OrangeStationIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default OrangeStationIcon;

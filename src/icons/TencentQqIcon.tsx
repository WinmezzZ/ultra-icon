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

const TencentQqIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg
        fill="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        {...props}
      >
        <path
          fill="#000"
          d="M23.794 44.518c-3.659 0-7.017-1.225-9.179-3.053-1.098.328-2.502.855-3.389 1.51-.759.56-.664 1.13-.527 1.361.6 1.013 10.296.647 13.095.332v-.15Zm0 0c3.659 0 7.016-1.225 9.179-3.053 1.097.328 2.502.855 3.389 1.51.758.56.663 1.13.526 1.361-.6 1.013-10.295.647-13.094.332v-.15Z"
        />
        <path
          fill="#000"
          d="M23.814 22.591c6.042-.04 10.884-1.21 12.525-1.658.39-.107.6-.3.6-.3.001-.055.025-.983.025-1.462 0-8.066-3.808-16.17-13.172-16.171-9.364 0-13.171 8.105-13.171 16.171 0 .48.023 1.407.025 1.462 0 0 .17.18.481.267 1.515.421 6.448 1.65 12.643 1.691h.044Zm16.418 6.72c-.375-1.206-.886-2.61-1.404-3.96 0 0-.297-.037-.448.006-4.645 1.35-10.275 2.21-14.566 2.158h-.044c-4.267.05-9.858-.8-14.488-2.136-.177-.05-.526-.029-.526-.029-.518 1.35-1.029 2.756-1.403 3.96-1.786 5.748-1.208 8.126-.767 8.18.945.114 3.68-4.327 3.68-4.327 0 4.513 4.073 11.441 13.403 11.505h.247c9.329-.064 13.403-6.992 13.403-11.505 0 0 2.734 4.44 3.68 4.327.44-.054 1.019-2.432-.767-8.18Z"
        />
        <path
          fill="#fff"
          d="M20.46 14.916c-1.27.057-2.355-1.39-2.423-3.23-.07-1.84.904-3.378 2.174-3.436 1.27-.057 2.354 1.39 2.423 3.23.07 1.84-.904 3.38-2.174 3.436Zm9.088-3.23c-.068 1.84-1.153 3.287-2.424 3.23-1.27-.057-2.242-1.595-2.173-3.436.069-1.84 1.154-3.286 2.423-3.23 1.27.058 2.243 1.596 2.174 3.437Zm2.257 5.828c-.34-.751-3.758-1.59-7.99-1.59h-.046c-4.232 0-7.65.839-7.99 1.59a.253.253 0 0 0-.025.108c0 .052.017.102.047.145.286.416 4.082 2.477 7.968 2.477h.046c3.886 0 7.682-2.06 7.968-2.477a.256.256 0 0 0 .047-.146.25.25 0 0 0-.025-.106"
        />
        <path
          fill="#000"
          d="M22.022 11.714c.058.727-.34 1.373-.89 1.443-.549.07-1.04-.461-1.1-1.188-.057-.727.341-1.373.89-1.443.55-.071 1.042.461 1.1 1.188Zm3.49.243c.112-.201.877-1.259 2.46-.874.415.102.608.25.648.309.06.086.077.21.016.375-.12.329-.369.32-.506.256-.09-.042-1.192-.777-2.208.32-.07.075-.195.1-.313.012-.119-.09-.167-.272-.097-.398Z"
        />
        <path
          fill="#fff"
          d="M23.814 27.25h-.045c-2.918.035-6.455-.351-9.882-1.027-.293 1.699-.47 3.834-.318 6.38.384 6.433 4.205 10.478 10.104 10.536h.24c5.898-.058 9.718-4.103 10.103-10.537.152-2.546-.025-4.68-.319-6.379-3.426.676-6.965 1.063-9.883 1.027"
        />
        <path fill="#000" d="M15.504 26.712v6.332s2.9.585 5.807.18v-5.841a53.39 53.39 0 0 1-5.807-.671Z" />
        <path
          fill="#000"
          d="M36.938 20.634s-5.642 1.78-13.124 1.831h-.044c-7.47-.05-13.105-1.825-13.124-1.831l-1.89 4.716c4.726 1.425 10.584 2.343 15.014 2.29h.044c4.43.053 10.287-.865 15.014-2.29l-1.89-4.716Z"
        />
      </svg>
    </span>
  );
};

TencentQqIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default TencentQqIcon;

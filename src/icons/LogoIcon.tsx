import * as React from 'react';
import { SpaceProps } from 'styled-system';

import { Svg } from '../ui/Svg';

interface Props extends SpaceProps {
  size?: number;
  fill?: string;
}

const LogoIcon: React.FC<Props> = ({
  size = 35,
  fill = '#F53838',
  ...props
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 35 37" fill="none" {...props}>
      <path
        d="M31.147 13.648l-.021-.022a.013.013 0 01-.005-.005L17.502 0 3.88 13.62l-.004.006-.023.021a13.245 13.245 0 0013.283 22c.238-.072.492-.072.73 0a13.243 13.243 0 0017.04-14.242 13.246 13.246 0 00-3.759-7.757zM8.723 22.63a.714.714 0 00-.209.505 13.219 13.219 0 001.965 6.802.258.258 0 01-.317.375 7.947 7.947 0 01-2.543-12.938L17.5 7.493l9.882 9.881a7.945 7.945 0 01-.007 11.231 7.922 7.922 0 01-2.536 1.707.26.26 0 01-.318-.375 13.22 13.22 0 001.966-6.802.713.713 0 00-.21-.505l-4.674-4.958a.26.26 0 00-.391.326c1.815 3.285.254 8.004-2.35 10.607l-.013.014a1.918 1.918 0 01-2.7 0l-.012-.014c-2.604-2.603-4.164-7.322-2.349-10.607a.258.258 0 00-.39-.326L8.722 22.63z"
        fill={fill}
      />
    </Svg>
  );
};

export default LogoIcon;

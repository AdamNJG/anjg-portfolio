import ReactLogo from '../../assets/logos/react.svg';
import ReactRouterLogo from '../../assets/logos/react-router.svg';
import ViteLogo from '../../assets/logos/vite.svg';
import TypeScriptLogo from '../../assets/logos/Typescript.svg';
import GithubLogoLight from '../../assets/logos/github-mark.svg';
import GithubLogoDark from '../../assets/logos/github-mark-white.svg';
import VitestLogo from '../../assets/logos/vitest.svg';
import StrykerLogo from '../../assets/logos/stryker.svg';
import NpmLogo from '../../assets/logos/npm.svg';
import RustLogoBlack from '../../assets/logos/rust-logo-blk.svg';
import RustLogoWhite from '../../assets/logos/rust-logo-white.svg';
import DockerLogo from '../../assets/logos/docker.svg';
import CLogo from '../../assets/logos/C_Programming_Language.svg';
import TokioLogo from '../../assets/logos/Tokio_logo.svg';
import PlaywrightLogo from '../../assets/logos/Playwright.svg';
import HandImage from '../../assets/logos/hand.svg';
import LightingImage from '../../assets/logos/lightning-icon.svg';
import MssqlLogo from '../../assets/logos/microsoft-sql-server.svg'; 
import CSharpLogo from '../../assets/logos/CSharp.svg';
import NodeJsLogo from '../../assets/logos/Node.js.svg';
import AwsLogo from '../../assets/logos/aws-logo.svg';

export const lightLogoMap: Record<string, string> = {
  React: ReactLogo,
  'React Router': ReactRouterLogo,
  Vite: ViteLogo,
  TypeScript: TypeScriptLogo,
  'Github Actions': GithubLogoLight,
  Vitest: VitestLogo,
  Stryker: StrykerLogo,
  'NPM Publishing': NpmLogo,
  Rust: RustLogoBlack,
  Docker: DockerLogo,
  FFI: CLogo,
  Tokio: TokioLogo,
  Axum: RustLogoBlack,
  Criterion: RustLogoBlack,
  Playwright: PlaywrightLogo,
  'Custom Gesture Logic': HandImage,
  'Event Handling': LightingImage,
  MSSQL: MssqlLogo,
  'C#': CSharpLogo,
  'Node.js': NodeJsLogo,
  AWS: AwsLogo
};

export const darkLogoMap: Record<string, string> = {
  ...lightLogoMap,
  'Github Actions': GithubLogoDark,
  Rust: RustLogoWhite,
  Axum: RustLogoWhite,
  Criterion: RustLogoWhite
};

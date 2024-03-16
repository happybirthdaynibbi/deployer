import { FC } from "react";
import dynamic from "next/dynamic";
import { useNetworkConfiguration } from "../contexts/NetworkConfigurationProvider";

//INTERNAL IMPORT
import NetworkSwitcherSVG from "./SVG/NetworkSwitcherSVG";

const NetworkSwitcher: FC = () => {
  const { networkConfiguration, setNetworkConfiguration } =
    useNetworkConfiguration();

  console.log(networkConfiguration);

  return (
    <>
      <input type="checkbox" id="checkbox" />
      <label className="switch">
        <select
          value={networkConfiguration}
          onChange={(e) => setNetworkConfiguration(e.target.value || "devnet")}
          className="max-w-xs bg-transparent border-none select outline-0"
        >
          <option className="fontcolor-black" value="mainnet-beta">main</option>
          <option value="devnet">dev</option>
          <option value="testnet">test</option>
        </select>
        <NetworkSwitcherSVG />
      </label>
    </>
  );
};

export default dynamic(() => Promise.resolve(NetworkSwitcher), {
  ssr: false,
});

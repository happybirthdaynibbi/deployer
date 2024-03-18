import { FC } from "react";

interface BrandingProps {
  image: string;
  title: string;
  message: string;
}

const Branding: FC<BrandingProps> = ({ image, title, message }) => {
  return (
    <div className="ps-4 hidden py-4 lg:block"> {/* Changed class to className */}
      <div className="relative h-full w-full overflow-hidden rounded-xl"> {/* Changed class to className */}
        <img
          src={`assets/images/ai/${image}.jpg`}
          alt=""
          className="h-full w-full -scale-x-100 transform" {/* Changed class to className */}
        />
        <div className="bg-default-950/40 absolute inset-0"> {/* Changed class to className */}
          <div className="flex h-full items-end justify-center"> {/* Changed class to className */}
            <div className="text-start p-6"> {/* Changed class to className */}
              <h5 className="mb-3 text-xl font-bold text-white">
                SolDeployerAi<br />
                {title}!
              </h5>
              <p className="text-default-400 text-base font-medium">{message}</p> {/* Changed class to className */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branding;

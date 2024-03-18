import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { HomeView, ToolView, FeatureView, OfferView, FaqView, CreateView, ToeknMetadata, ContactView, AirdropView, DonateView } from "../views";

interface HomeProps {
  setOpenCreateModal: (value: boolean) => void;
}

const Home: NextPage = () => {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openTokenMetaData, setOpenTokenMetaData] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [openAirdrop, setOpenAirdrop] = useState(false);
  const [openSendTransaction, setOpenSendTransaction] = useState(false);

  return (
    <>
      <Head>
        <title>SolDeployerAI</title>
        <meta name="description" content="SolDeployerAI" />
      </Head>
      <HomeView setOpenCreateModal={setOpenCreateModal} />
      <ToolView
        setOpenCreateModal={setOpenCreateModal}
        setOpenTokenMetaData={setOpenTokenMetaData}
        setOpenContact={setOpenContact}
        setOpenAirdrop={setOpenAirdrop}
        setOpenSendTransaction={setOpenSendTransaction}
      />
      <FeatureView
        setOpenCreateModal={setOpenCreateModal}
        setOpenTokenMetaData={setOpenTokenMetaData}
        setOpenContact={setOpenContact}
        setOpenAirdrop={setOpenAirdrop}
        setOpenSendTransaction={setOpenSendTransaction}
      />
      <OfferView />
      <FaqView />
      {/* // */}
      {openCreateModal && (
        <div className="relative h-full new_loader bg-slate-900">
          <CreateView setOpenCreateModal={setOpenCreateModal} />
        </div>
      )}

      {openTokenMetaData && (
        <div className="relative h-full new_loader bg-slate-900">
          <ToeknMetadata setOpenTokenMetaData={setOpenTokenMetaData} />
        </div>
      )}

      {openContact && (
        <div className="relative h-full new_loader bg-slate-900">
          <ContactView setOpenContact={setOpenContact} />
        </div>
      )}
      {openAirdrop && (
        <div className="relative h-full new_loader bg-slate-900">
          <AirdropView setOpenAirdrop={setOpenAirdrop} />
        </div>
      )}
      {openSendTransaction && (
        <div className="relative h-full new_loader bg-slate-900">
          <DonateView setOpenSendTransaction={setOpenSendTransaction} />
        </div>
      )}
    </>
  );
};

export default Home;

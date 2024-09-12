import Image from "next/image";

const CommunityUpdates = () => {
  return (
    <div className="communityUpdates">
      <div className="communityUpdatesText">
        <p className="sectionTitle">Caring is the new marketing</p>
        <p className="description">
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who&apos;s joining the community,
          read about how our community are increasing their membership income
          and lot&apos;s more.​
        </p>
      </div>
      <div className="communityUpdatesBody">
        <div className="carte">
            <Image src="/communityUpdates_1.png" width={250} height={200} alt=""></Image>
            <div className="box">
                <p className="boxDescription">
                Creating Streamlined Safeguarding Processes with OneRen
                </p>
                <button className="boxButton">Readmore</button>
            </div>
        </div>
        <div className="carte">
            <Image src="/communityUpdates_2.png" width={250} height={200} alt=""></Image>
            <div className="box">
                <p className="boxDescription">
                What are your safeguarding responsibilities and how can you manage them?
                </p>
                <button className="boxButton">Readmore</button>
            </div>
        </div>
        <div className="carte">
            <Image src="/communityUpdates_3.png" width={250} height={200} alt=""></Image>
            <div className="box">
                <p className="boxDescription">
                Revamping the Membership Model with Triathlon <br></br> Australia
                </p>
                <button className="boxButton">Readmore</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityUpdates;

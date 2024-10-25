import { useState } from "react";

const FaqComponent = () => {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const handleIndex = (index) => {
        if (index === selectedIndex) {
            setSelectedIndex(-1);
        } else {
            setSelectedIndex(index);
        }
    }

    const rows = [
        {
            title: "1. Is MansaTrade Safe?",
            content: `In order to achieve security MansaTrade uses a 2-of-2 multi-signature address to safeguard every crypto exchanged on our platform. Trade disputes are resolved using a three-tier system that combines mediation and end-to-end encrypted trader chat. Since fiat transactions can frequently be reversed, there is always some chargeback risk when exchanging fiat currency for crypto. We recommend trading with buyers that are KYC and verified. MansaTrade only accepts payment methods known to be challenging for chargebacks; as a result, We do not accept PayPal or credit cards, for instance.`,
        },
        {
            title: "2. What are transaction fees?",
            content: "MansaTrade charges a 0.45% transaction fee on trades relatively lower than most centralized p2p. Transaction fees are automatically deducted from both parties by the smart contract.",
        },
        {
            title: "3. How does MansaTrade handle fiats like dollars and euros? Where does it go?",
            content: "MansaTrade does not handle fiat at all. Every trade on our platform is settled outside of MansaTrade. In order words, fiat payments are sent outside MansaTrade via traditional banking services.",
        },
        {
            title: "4. Does MansaTrade require a security deposit?",
            content: "As of now, MansaTrade does not require a security deposit. However, crypto sellers for fiat are required to deposit the asset they want to trade for cash into our secured smart contract before receiving fiat. On the other hand, buyers (Fiat Providers are not required to deposit crypto. One-time KYC for buyers is optional but highly recommended to remain a verified buyer on the platform, which increases seller trust.",
        },
        {
            title: "5. Which payment methods are available?",
            content: "MansaTrade accepts over 20 different payment methods such as Zelle, Cashapp, Venmo, Apple Pay, Wechat, and many more. Navigate through the platform for a complete list of all payment methods.",
        },
        {
            title: "6. How long does a trade take?",
            content: "MansaTrade does not offer automatic order matching. All trades are settled manually by humans outside the MansaTrade P2P platform. Trades can still be completed quite rapidly even though they take longer than they would on Centralized exchanges. Most payment methods on MansaTrade platform are instant while others may take a few days such as certain bank transfers.",
        },
        {
            title: "7. How does MansaTrade protect my privacy?",
            content: "Personal information of users such as names, email, phone number etc. Are not required to use on our platform. Our platform does not have a database and every payment information is stored on the Smart Contract.",
        },
        {
            title: "8. How does MansaTrade protect my data?",
            content: "MansaTrade does not store data at all, and has no backend server. Our technology uses only the front end and smart contract. We do not store user data or payment information. We use two types of keys; the private key is used to decrypt messages while the public key can only encrypt messages. For example, A buyer's public key is made public when they create an offer in the smart contract. When a seller wants to interact with a buyer's offer, the seller uses the buyer's public keys to encrypt his/her payment information which is sent to the smart contract. The buyer then decrypts the data with his private key.",
        },
    ]

    return (
        <div className="">
            {
                rows.map((row, index) => 
                    <div key={index} className={`mb-8 text-left cursor-pointer ${index === selectedIndex ? "border-2 border-first-theme rounded-lg" : ""}`} onClick={() => handleIndex(index)}>
                        <div className={`text-second-theme p-4 ${index === selectedIndex ? "block" : "hidden"}`}>{row.content}</div>
                    </div>
                )
            }
        </div>
    );
}

export default FaqComponent;
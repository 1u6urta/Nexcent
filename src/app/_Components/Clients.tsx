import ClientsLogos from "./ClientsLogos";

const Clients = () => {
    return ( 
    <div className="clients">
        <div className="clientText">
            <p className="sectionTitle">
                Our Clients
            </p>
            <p className="description">
                We have been working with some Fortune 500+ clients
            </p>
        </div>
        <ClientsLogos></ClientsLogos>
    </div>
    );
}
 
export default Clients;
import PropertyShareComponent from "@/app/components/Property/PropertyShareComponent";

const getPropertyData = async (id) => {

    try {
        const mUrl = `${process.env.SERVER_BASE_URL}/get-property-item?id=${id}`;
        console.log(mUrl);
        const response = await fetch(mUrl, {
          cache: 'no-store',
        });

        if (response.ok) {
            return await response.json();
        }
      } catch (error) {
        
      }
}


export async function generateMetadata({ params, searchParams }, parent) {
  const noImgLink = '/assets/img/no-image.jpg';
  const { id } = params;
  const propertyMetaInfo = await getPropertyData(id);
  const responseData = propertyMetaInfo?.responseData;
  
  return {
    title: responseData?.name,
    description: responseData?.descriptions,
    keywords: responseData?.address,
    image: propertyMetaInfo?.image ? propertyMetaInfo.image : noImgLink,
    tags: propertyMetaInfo?.address, 
  };
}

export default async function PropertyDetails({ params }) {
  const noImgLink = '/assets/img/no-image.jpg';
  const id = params.id;
  const response = await getPropertyData(id);
  const propertyItem = response?.responseData;

  if (!response) {
    return (
      <div className="alert alert-danger text-center" role="alert">
        <h3>Property not found or failed to load.</h3>
      </div>
    );
  }

  return (
        <div className="row">
            <div className="col-md-12">
                <div className="card shadow rounded border mb-4">
                    <img
                        src={propertyItem?.image ? propertyItem?.image : noImgLink}
                        className="mt-2 rounded"
                        alt={propertyItem?.name}
                        style={{ maxHeight: '250px', objectFit: 'contain' }}
                    />
                    <div className="card-body">
                        <div className="text-center">
                            <h3 className="fw-bold">{propertyItem?.name}</h3>
                            <span className="fw-bold">{propertyItem?.address}</span>
                            <div className="mt-2">
                                <strong>Cost per night: </strong>৳{propertyItem?.costPerNight}
                            </div>
                            <div className="mt-2">
                                <strong>Available rooms: </strong>{propertyItem?.availableRooms}
                            </div>
                            <div className="mt-2">
                                <strong>Avg. Rating: </strong>{propertyItem?.averageRating || 'Not rated'}
                            </div>
                            <div className="card-text" style={{ textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: propertyItem?.descriptions }} />
                        </div>
                        
                        <PropertyShareComponent />
                    </div>
                </div>
            </div>
        </div>
  );
}

import "./ListingDocuments.css";

export default function ListingDocuments({ documents = [] }) {
  return (
    <div className="listing-documents-container">
      {documents.map((document) => (
        <span key={document} className="fs-small bg-success text-success-light">
          {document}
        </span>
      ))}
    </div>
  );
}

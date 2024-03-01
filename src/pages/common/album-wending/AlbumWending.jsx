import React from "react";
import "./album-wending.scss";
import useNavigateParams from "../../../hook/useNavigateParams";

const AlbumWending = ({ title, content, albumAnhCuoi, pageIndex }) => {
  const { navigateWithParams } = useNavigateParams();
  return (
    <section className="service-section service-section-3">
      {pageIndex !== "Album" && (
        <div className="elementor-container">
          <div className="service-section-header">
            <h2 className="elementor-widget-container elementor-heading-title">
              {title}
            </h2>
            <div className="elementor-widget-container">
              <span className="elementor-heading-title">{content}</span>
            </div>
          </div>
        </div>
      )}
      <div className="elementor-widget-container overflow-hidden">
        <div className="jet-listing row">
          {albumAnhCuoi.map((album) => (
            <div
              key={album.id}
              className={`jet-item col ${
                pageIndex == "Album" ? "col-md-4" : "col-md-3"
              } col-sm-6 col-12`}
              onClick={() => {
                navigateWithParams("album-detail", { id: album.id });
              }}
            >
              <img
                src={album.src}
                width="100%"
                height="auto"
                alt={album.name}
              />
              <h4 className="elementor-heading-title">{album.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlbumWending;

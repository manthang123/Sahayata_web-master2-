import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const Insta = () => {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <div>
      <Helmet>
        <script async defer src="https://www.instagram.com/embed.js"></script>
      </Helmet>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", overflowX: "auto" }}>
        {/* Post 1 */}
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/C_fAaRtImor/?img_index=1"
          data-instgrm-version="14"
          style={{ maxWidth: "320px", margin: "0 auto" }}
        ></blockquote>

        {/* Post 2 */}
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/C8Hv_1-oZiw/?img_index=1"
          data-instgrm-version="14"
          style={{ maxWidth: "320px", margin: "0 auto" }}
        ></blockquote>

        {/* Post 3 */}
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/DAz67TrIDIc/?img_index=1"
          data-instgrm-version="14"
          style={{ maxWidth: "320px", margin: "0 auto" }}
        ></blockquote>

        {/* Post 4 */}
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/Clyx9dDIV70/"
          data-instgrm-version="14"
          style={{ maxWidth: "320px", margin: "0 auto" }}
        ></blockquote>

        {/* Post 5 */}
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/Ck6XY8BP6sc/"
          data-instgrm-version="14"
          style={{ maxWidth: "320px", margin: "0 auto" }}
        ></blockquote>
      </div>
    </div>
  );
};
export default Insta;
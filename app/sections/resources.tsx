import { openSourceAssets } from "@/app/data/open-source-assets";

export function ResourcesSection() {
  return (
    <section id="resources" className="pb-16">
      <div className="section-container">
        <div className="glass rounded-2xl p-5 text-xs text-muted-foreground">
          <p className="mb-2 uppercase tracking-[0.2em]">Visual Resources</p>
          <p>
            Imagery uses open-license assets from Unsplash. Icons use {" "}
            <a
              href={openSourceAssets.iconSet.url}
              target="_blank"
              rel="noreferrer"
              className="text-foreground underline decoration-dotted"
            >
              {openSourceAssets.iconSet.name}
            </a>{" "}
            ({openSourceAssets.iconSet.license}).
          </p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
            {openSourceAssets.heroPanels.map((asset) => (
              <a
                key={asset.creditUrl}
                href={asset.creditUrl}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-dotted"
              >
                Photo: {asset.creditName}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

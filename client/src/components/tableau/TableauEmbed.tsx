import { useEffect, useRef } from "react";

interface TableauEmbedProps {
  url: string;
  title: string;
  description: string;
}

const TableauEmbed = ({ url, title, description }: TableauEmbedProps) => {
  const vizRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This is where the actual implementation would go once we have real Tableau URLs
    // For now, we're just showing a placeholder since we don't have actual Tableau visualization URLs
    
    // The actual implementation would look something like:
    // if (window.tableau && vizRef.current) {
    //   const viz = new window.tableau.Viz(vizRef.current, url, {
    //     hideTabs: true,
    //     hideToolbar: true,
    //     width: "100%",
    //     height: "100%"
    //   });
    // }
  }, [url]);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
      <div className="p-6 border-b border-neutral-200">
        <h3 className="text-xl font-display font-bold text-neutral-800">{title}</h3>
        <p className="text-neutral-600 mt-2">{description}</p>
      </div>
      <div className="h-96 w-full" ref={vizRef}>
        <div className="w-full h-full bg-neutral-200 flex items-center justify-center">
          <div className="text-center text-neutral-600">
            <i className="fas fa-chart-line text-4xl mb-4"></i>
            <p className="font-accent">Tableau Visualization</p>
            <p className="text-sm mt-2">
              Ready for Tableau embedding. Replace with actual viz URL.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableauEmbed;

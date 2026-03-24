import path from "path";
import { GatsbyNode } from "gatsby";

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src"),
                "@components": path.resolve(__dirname, "src/components"),
                "@ui": path.resolve(__dirname, "src/components/ui"),
                "@sections": path.resolve(__dirname, "src/components/sections"),
                "@cards": path.resolve(__dirname, "src/components/cards"),
                "@layout": path.resolve(__dirname, "src/components/layout"),
                "@modals": path.resolve(__dirname, "src/components/modals"),
                "@backgrounds": path.resolve(__dirname, "src/components/backgrounds"),
                "@styles": path.resolve(__dirname, "src/styles"),
            },
            extensions: [".ts", ".tsx", ".js", ".jsx"],
        },
    });
};

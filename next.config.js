import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {};

export default withNextIntl(config);

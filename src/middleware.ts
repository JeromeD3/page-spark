import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    "/",
    "/(zh|en)/:path*",
    // 匹配所有路径，但排除以下路径:
    // - /api/* - API 路由
    // - /_next/* - Next.js 内部路由
    // - /_vercel/* - Vercel 相关路由
    // - 包含文件扩展名的路径 (如 .jpg, .png 等)
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};

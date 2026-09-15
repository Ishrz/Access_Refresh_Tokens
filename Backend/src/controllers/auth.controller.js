import { registerService, loginService,  generateAccessTokenService } from "../services/auth.service.js";

export const registerHandler = async (req, res) => {
  try {
    const { user, accessToken, refreshToken } = await registerService(req.body);

    res.cookie("accessToken", accessToken, {
      sameSite: "lax",
      httpOnly: true,
      maxAge: 15 * 60 * 1000,
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(201).json({
      message: "User created successfully",
      success: true,
      user,
    });
  } catch (err) {
    console.error("Error in registerHandler:", err);
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};

export const loginHandler = async (req, res) => {
  try {
    const { user, accessToken, refreshToken } = await loginService(req.body);

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 15 * 60 * 1000,
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      message: "User logged in successfully",
      success: true,
      user,
    });
  } catch (error) {
    console.error("Error in loginHandler:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export const generateAccessTokenHandler = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({
        message: "Unauthorized request: Refresh token is missing",
        success: false,
      });
    }

    const newAccessToken = await generateAccessTokenService(refreshToken );

    res.cookie("accessToken", newAccessToken, {
        httpOnly: true,
        sameSite: "lax",
        maxAge: 15*60*1000
    })

    res.status(201).json({
        message: "New access token generated successfully",
        success: true
    })


  } catch (error) {
    console.error("Error in generateAccessTokenHandler:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

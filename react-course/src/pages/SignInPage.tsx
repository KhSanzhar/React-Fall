import React from "react";
import { Link } from "react-router-dom";

export function SignInPage() {
    
    return( 
        <div>
            <div className="mt-4">
                <Link to="/sign_up" className="text-blue-600 hover:underline">
                    Don't have account ? Register
                </Link>
            </div>
        </div>
    );
}
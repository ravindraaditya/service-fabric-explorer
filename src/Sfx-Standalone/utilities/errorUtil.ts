//-----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation.  All rights reserved.
// Licensed under the MIT License. See License file under the project root for license information.
//-----------------------------------------------------------------------------

import "./utils";

export default function error(messageOrFormat: string, ...params: Array<any>): Error {
    if (!Array.isArray(params)) {
        return new Error(messageOrFormat);
    }

    return new Error(String.format(messageOrFormat, ...params));
}

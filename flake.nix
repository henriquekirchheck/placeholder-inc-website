{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };
  outputs = { self, nixpkgs, flake-utils, ... }@inputs:
    flake-utils.lib.eachDefaultSystem (system:
      let
        overlays = [ ];
        pkgs = import nixpkgs { inherit system overlays; };
      in {
        devShells.default = pkgs.mkShell {
          nativeBuildInputs = with pkgs; [ nodePackages.pnpm ];
          buildInputs = with pkgs; [ nodejs_20 ];
        };
      });
}


  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-vgp19gz1il',
  shadow: true,
})
export class Cvgp19gz1il {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  

  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-tlafahtx59',
  shadow: true,
})
export class Ctlafahtx59 {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  
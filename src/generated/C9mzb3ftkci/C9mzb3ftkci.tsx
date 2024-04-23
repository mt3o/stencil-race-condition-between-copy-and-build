
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-9mzb3ftkci',
  shadow: true,
})
export class C9mzb3ftkci {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  